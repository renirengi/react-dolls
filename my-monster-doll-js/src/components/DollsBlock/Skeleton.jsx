import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={500}
    viewBox="0 0 300 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="43" y="10" rx="30" ry="30" width="210" height="280" /> 
    <rect x="0" y="300" rx="10" ry="10" width="300" height="32" /> 
    <rect x="0" y="340" rx="10" ry="10" width="300" height="95" /> 
    <rect x="0" y="447" rx="10" ry="10" width="100" height="35" /> 
    <rect x="163" y="445" rx="20" ry="20" width="138" height="41" />
  </ContentLoader>
)

export default Skeleton
