"use client"

import NextError from "next/error"

const Error = ({ error }: { error: Error }) => {
  return (
    <NextError statusCode={500} title={error.message}/>
    // <div>Error: {error.message}</div>
  )
}

export default Error