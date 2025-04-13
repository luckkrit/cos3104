import { defineAppSetup } from '@slidev/types'
import SanpackPlugin from 'sandpack-vue3';

export default defineAppSetup(({ app, router }) => {
    app.use(SanpackPlugin());
})