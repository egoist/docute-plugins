import {Config} from 'bili'

const config: Config = {
  output: {
    fileName: 'index[min].js',
    format: ['umd', 'umd-min'],
    moduleName: 'docuteMermaid'
  }
}

export default config