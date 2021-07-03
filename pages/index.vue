<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Hero />

        <BrandLogoCarousel />

        <ServiceOne />

        <WorkingProcess />

        <AboutOne />

        <FaqSection />

   

        <BlogOne />

        <Footer />

        <ScrollTop />

    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Hero: () => import('@/components/Hero'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            ServiceOne: () => import('@/components/ServiceOne'),
            WorkingProcess: () => import('@/components/WorkingProcess'),
            AboutOne: () => import('@/components/AboutOne'),
            
            FaqSection: () => import('@/components/FaqSection'),
            BlogOne: () => import('@/components/BlogOne'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Home'
            }
        },
    };
</script>


