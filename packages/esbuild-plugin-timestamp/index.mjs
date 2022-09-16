import fs from 'fs'

const timestamp = ({
    filter = /src\/index.jsx$/,
    placeholder = '__BUILD_TIMESTAMP__'
} = {}) => ({
    name: 'esbuild:timestamp',
    setup(build) {
        build.onLoad({ filter }, async (args) => {
            const text = await fs.promises.readFile(args.path, 'utf8')
            const replacedText = text.replace(placeholder, +new Date())

            return {
                contents: replacedText,
                loader: 'js'
            }
        })
    }
})

export default timestamp