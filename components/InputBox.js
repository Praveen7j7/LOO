"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { EmojiHappyIcon } from '@heroicons/react/solid';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/outline';
import { db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

function InputBox() {
    const inputRef = useRef(null);
    const filepickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null); // Use camelCase for state variable names

    const sendPost = async (e) => {
        e.preventDefault();

        const message = inputRef.current.value;

        if (!message) return;

        try {
            // Add post to Firestore
            const docRef = await addDoc(collection(db, 'posts'), {
                message,
                name: "PVD",
                email: "praveenworlforum@gmail.com",
                image: "https://drive.google.com/uc?export=view&id=1hy6V3Pwmit0xTvC7hYJeDQOK6L8MwrB7",
                timestamp: serverTimestamp(),
            });

            // If there's an image to upload
            if (imageToPost) {
                const imageRef = ref(storage, `posts/${docRef.id}`);
                await uploadString(imageRef, imageToPost, 'data_url');
                
                // Get the image URL and update the post document
                const url = await getDownloadURL(imageRef);

                await setDoc(docRef, { image: url }, { merge: true });
            }

            // Clear the input field and image state
            inputRef.current.value = "";
            setImageToPost(null);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result); // Store the image as base64
        };
    };

    const removeImage = () => {
        setImageToPost(null); // Reset the image state
    };

    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className="flex space-x-4 p-4 items-center">
                <Image
                    className="rounded-full" 
                    src={"https://drive.google.com/uc?export=view&id=1hy6V3Pwmit0xTvC7hYJeDQOK6L8MwrB7"}
                    width={40} 
                    height={40} 
                    layout="fixed"
                />

                <form className='flex flex-1 outline-none bg-gray-100' onSubmit={sendPost}>
                    <input 
                        className="h-12 bg-gray-100 flex-grow p-5 focus:outline-none rounded-full" 
                        type="text" 
                        ref={inputRef} 
                        placeholder={`What's on your mind, PVD`} 
                    />
                    <button hidden type="submit">Submit</button>
                </form>

                {imageToPost && (
                    <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                        <img className="h-10 object-contain" src={imageToPost} alt="Selected" />
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}
            </div>

            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>    
                <div onClick={() => filepickerRef.current.click()} className='inputIcon'>
                    <CameraIcon className='h-7 text-green-400'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                    <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden />
                </div>
                <div className='inputIcon'>
                    <EmojiHappyIcon className='h-7 text-yellow-300'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
                </div>  
            </div>
        </div>
    );
}

export default InputBox;
