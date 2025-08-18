import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact – Global Cancer Fund</title>
      </Head>
      <main className="min-h-screen px-6 py-24 bg-white text-gray-900 text-center">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Want to learn more or get involved? Reach out to us via email at <a href="mailto:info@globalcancerfund.org" className="text-blue-700 underline">info@globalcancerfund.org</a>
        </p>
      </main>
    </>
  )
}
