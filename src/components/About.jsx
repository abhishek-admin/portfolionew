import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
      </div>
      <p className='text-xl mt-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      <br/>
      <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde qui voluptatibus provident perferendis eos deserunt eligendi assumenda eaque fuga? Neque impedit voluptatem deserunt nihil laboriosam iusto beatae consequuntur, maxime voluptatibus error eum. Deserunt nesciunt quis, sint pariatur laboriosam neque voluptas placeat ad repellendus harum quos? Cumque deserunt quaerat impedit reprehenderit?</p>
    </div>
    </div>
  )
}

export default About