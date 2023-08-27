// import React from 'react' // next js does not requ. react import
import Feed from '@components/Feed'

const home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden"/>
        <span className="orange-gradient text-center">AI-powered Prompts</span>
      </h1>
      <p className="desc text-center">promprtopia is a modern open-source AI prompting tool for modern wprld to discover, create and share creative prompts</p>

      <Feed />
    </section>
  )
}

export default home