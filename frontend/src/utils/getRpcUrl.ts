import sample from 'lodash/sample'

export const nodes = [process.env.REACT_APP_NODE_1]

const getNodeUrl = () => {
  return sample(nodes)
}

export default getNodeUrl
