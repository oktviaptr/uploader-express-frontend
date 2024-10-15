import React from 'react'
import { Spotlight } from './Spotlight'

const SpotlightPreview = ({children}) => {
    return (
        <div className=" bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
            className="-top-50 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div>
            <div>
                {children}
            </div>
          </div>
        </div>
      );
}

export default SpotlightPreview