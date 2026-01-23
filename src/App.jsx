import { useEffect, useState } from 'react'
import { AdMob, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob'

function App() {
  const [isAdMobInitialized, setIsAdMobInitialized] = useState(false)

  useEffect(() => {
    initializeAdMob()
  }, [])

  const initializeAdMob = async () => {
    try {
      // AdMobの初期化
      await AdMob.initialize({
        initializeForTesting: false,
      })
      setIsAdMobInitialized(true)

      // バナー広告を表示
      await showBannerAd()
    } catch (error) {
      console.error('AdMob initialization failed:', error)
    }
  }

  const showBannerAd = async () => {
    try {
      await AdMob.showBanner({
        adId: 'ca-app-pub-2188494471896935/4910249465',
        adSize: BannerAdSize.ADAPTIVE_BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        isTesting: false,
      })
    } catch (error) {
      console.error('Banner ad failed to show:', error)
    }
  }

  return (
    <div className="app-container min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="px-4 py-4 safe-area-top">
          <h1 className="text-xl font-semibold text-gray-800 text-center">
            かんたん文書作成
          </h1>
        </div>
      </header>

      <main className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-3xl mb-2">📝</div>
            <div className="text-sm font-medium text-gray-700">自由に書く</div>
          </button>

          <button className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-3xl mb-2">📋</div>
            <div className="text-sm font-medium text-gray-700">メモ・連絡事項</div>
          </button>

          <button className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-3xl mb-2">✉️</div>
            <div className="text-sm font-medium text-gray-700">お手紙</div>
          </button>

          <button className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-3xl mb-2">📢</div>
            <div className="text-sm font-medium text-gray-700">お知らせ</div>
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
