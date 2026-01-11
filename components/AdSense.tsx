interface AdSenseProps {
  slot?: string
  style?: React.CSSProperties
  format?: string
  responsive?: boolean
}

export default function AdSense({ 
  slot = '1234567890', 
  style = { display: 'block' },
  format = 'auto',
  responsive = true 
}: AdSenseProps) {
  return (
    <div className="ad-container">
      <div className="text-gray-500 text-sm mb-2">Advertisement</div>
      <div 
        className="bg-gray-200 rounded min-h-[100px] flex items-center justify-center"
        style={{ minHeight: '100px', ...style }}
      >
        {/* AdSense Placeholder - Replace with actual AdSense code */}
        <div className="text-gray-400 text-sm">
          AdSense Ad Unit
          {slot && <span className="block text-xs mt-1">Slot: {slot}</span>}
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-2">
        {/* When ready, replace this with actual Google AdSense script */}
        {/* 
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"></script>
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXX"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        */}
      </p>
    </div>
  )
}
