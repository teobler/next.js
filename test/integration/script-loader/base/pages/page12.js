import Script from 'next/script'

const Page = () => {
  return (
    <div className="container">
      <Script
        id="id-1"
        strategy="beforeInteractive"
        order={1}
        dangerouslySetInnerHTML={{ __html: `() => console.log(1-1)` }}
      />
      <Script
        id="id-2"
        strategy="beforeInteractive"
        order={1}
        dangerouslySetInnerHTML={{ __html: `() => console.log(1-2)` }}
      />
      <Script
        id="id-3"
        strategy="beforeInteractive"
        order={2}
        dangerouslySetInnerHTML={{ __html: `() => console.log(2-1)` }}
      />
      <Script
        id="id-5"
        strategy="beforeInteractive"
        order={2}
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js?a=2-1"
      />
      <Script
        id="id-4"
        strategy="beforeInteractive"
        order={2}
        dangerouslySetInnerHTML={{ __html: `() => console.log(2-2)` }}
      />
      <Script
        id="id-6"
        strategy="beforeInteractive"
        order={2}
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js?a=2-2"
      />
      <div>Page 12</div>
    </div>
  )
}

export default Page
