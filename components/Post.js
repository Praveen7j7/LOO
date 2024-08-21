"use client"; // Ensure this is a client-side component

import React from 'react';
import Image from 'next/image';
import { ChatAltIcon, ShareIcon, ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/solid';

function Post({ name, message, postImage, timestamp }) {
  return (
    <div className='flex flex-col'>
      <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
        <div className='flex items-center space-x-2'>
          <img 
            className='rounded-full'
            src="https://links.papareact.com/4zn" // Fixed profile picture URL
            width={40}
            height={40}
            alt={name}
          />
          <div>
            <p>{name}</p>
            <p className='text-xs text-gray-400'>
              {timestamp ? new Date(timestamp.toDate()).toLocaleString() : "Loading..."}
            </p>
          </div>
        </div>
        <p className='pt-4'>{message}</p>
        {postImage && (
          <div className='relative h-56 md:h-96 bg-white'>
            <Image 
              src={postImage} 
              layout="fill" 
              objectFit="cover" 
              alt="Post Image" 
              className='rounded-md'
            />
          </div>
        )}
      </div>
      {/* Footer section */}
      <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
        <div className='inputIcon rounded-none rounded-bl-2xl'>
          <ThumbUpIcon className='h-4' />
          <p className='text-xs sm:text-base'>Like</p>
        </div>
        <div className='inputIcon rounded-none rounded-bl-2xl'>
          <ThumbDownIcon className='h-4' />
          <p className='text-xs sm:text-base'>UnLike</p>
        </div>
        <div className='inputIcon rounded-none'>
          <ChatAltIcon className='h-4' />
          <p className='text-xs sm:text-base'>Comment</p>
        </div>
        <div className='inputIcon rounded-none rounded-br-2xl'>
          <ShareIcon className='h-4' />
          <p className='text-xs sm:text-base'>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
