// app/page.tsx (最终优化版)

import dynamic from 'next/dynamic' // 1. 导入 dynamic 函数

// 2. 首屏可见的组件，我们正常导入
import { Header } from "@/components/header"
import { Breadcrumb } from "@/components/breadcrumb"
import { HeroSection } from "@/components/hero-section"
import { FAQStructuredData } from "@/components/structured-data"

// 3. 所有在屏幕下方的组件，我们都使用 next/dynamic 进行懒加载
//    这会为每个组件创建一个独立的 JS 文件 (chunk)，只在它们即将进入视口时才加载
const SignatureGenerator = dynamic(() => 
  import('@/components/signature-generator').then(mod => mod.SignatureGenerator)
)
const SEOOptimizedContent = dynamic(() => 
  import('@/components/seo-optimized-content').then(mod => mod.SEOOptimizedContent)
)
const SignatureExamples = dynamic(() => 
  import('@/components/signature-examples').then(mod => mod.SignatureExamples)
)
const HowItWorks = dynamic(() => 
  import('@/components/how-it-works').then(mod => mod.HowItWorks)
)
const WhyChooseUs = dynamic(() => 
  import('@/components/why-choose-us').then(mod => mod.WhyChooseUs)
)
const UseCases = dynamic(() => 
  import('@/components/use-cases').then(mod => mod.UseCases)
)
const SignatureStyles = dynamic(() => 
  import('@/components/signature-styles').then(mod => mod.SignatureStyles)
)
const FAQ = dynamic(() => 
  import('@/components/faq').then(mod => mod.FAQ)
)
const AdvancedFeatures = dynamic(() => 
  import('@/components/advanced-features').then(mod => mod.AdvancedFeatures)
)

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 结构化数据和首屏组件正常渲染 */}
      <FAQStructuredData />
      <Header />
      <Breadcrumb />
      <HeroSection />

      {/* 
        下面的所有组件现在都是懒加载的。
        当用户向下滚动页面，这些组件即将进入屏幕时，
        Next.js 会自动在后台加载它们对应的 JS 文件并进行渲染。
      */}
      <SignatureGenerator />
      <SEOOptimizedContent />
      <SignatureExamples />
      <AdvancedFeatures />
      <HowItWorks />
      <WhyChooseUs />
      <UseCases />
      <SignatureStyles />
      <FAQ />
    </main>
  )
}
