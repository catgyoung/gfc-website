import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About the Fund – Global Cancer Fund</title>
      </Head>
      <main className="min-h-screen px-6 py-24 bg-white text-gray-900 text-center">
        <h1 className="text-4xl font-bold mb-6">About the Global Cancer Fund</h1>
        <p className="max-w-3xl mx-auto text-lg">
          The Global Cancer Financing Platform is a bold new investment platform mobilizing $1 billion to close the global cancer equity gap.
          Designed for the future, it focuses on prevention, early detection, and treatment—starting with the breast and cervical cancers.
        </p>
      </main>
    </>
  )
}
