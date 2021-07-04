<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Our Teams" active-title="Our Teams" />

        <Director />

        <TeamSection />

        <TestimonialOne />

        <Footer />

        <ScrollTop />

    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            Director: () => import('@/components/Director'),
            AboutOne: () => import('@/components/AboutOne'),
            TeamSection: () => import('@/components/TeamSection'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Teams'
            }
        },
    };
</script>


