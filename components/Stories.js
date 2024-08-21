import React from 'react'
import StoryCard from './StoryCard';
const stories= [
    {
        name: " PVD",
        src: "https://drive.google.com/uc?export=view&id=1V-atkECvE21JwbYavWrFTDzhyWHswv3z",
        profile:"https://drive.google.com/uc?export=view&id=1AZQd7iFg3GDVHRJOc2UflJ6JqeIpiDSX",
    },
    {
        name: " Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile:"https://links.papareact.com/kxk",
    },
    {
        name: " Jeff Bezoz",
        src: "https://drive.google.com/uc?export=view&id=1hy6V3Pwmit0xTvC7hYJeDQOK6L8MwrB7",
        profile:"https://links.papareact.com/4zn",
    },
    {
        name: "Mark Zukerburg ",
        src: "https://links.papareact.com/4zn",
        profile:"https://links.papareact.com/kxk",
    },
    {
        name: " Bill Gates",
        src: "https://drive.google.com/uc?export=view&id=1hLXNDXiGjATMkZzJ3fB0nn7smryn4P0u",
        profile:"https://drive.google.com/uc?export=view&id=1AZQd7iFg3GDVHRJOc2UflJ6JqeIpiDSX",
    },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
       {stories.map((story) => (
    <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
))}

      
    </div>
  );
}

export default Stories;
