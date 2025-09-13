export default defineAppConfig({
    ui: {
        colors: {
            primary: "blue",
            neutral: "zinc"
        },
        toast: {
            slots: {
                root: 'bg-white/20 backdrop-blur-sm text-white',
                title: 'text-white',
                description: 'text-white',
                close: 'text-white',
                icon: 'bg-white',
            }
        },
        modal: {
            slots: {
                content: 'bg-white/20 backdrop-blur-sm',
            }
        }
    },
})