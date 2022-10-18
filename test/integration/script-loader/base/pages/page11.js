import Script from 'next/script'

const Page = () => {
  return (
    <div className="container">
      <Script
        id="id-4"
        strategy="beforeInteractive"
        order={3}
        dangerouslySetInnerHTML={{ __html: `() => console.log(4)` }}
      />
      <Script
        id="id-2"
        strategy="beforeInteractive"
        order={1}
        dangerouslySetInnerHTML={{ __html: `() => console.log(2)` }}
      />
      <Script
        id="id-1"
        order={0}
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js?a=2"
      />
      <Script
        id="id-3"
        strategy="beforeInteractive"
        order={2}
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js?a=1"
      />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js?a=3" />
      <div>Page 11</div>
    </div>
  )
}

export default Page
