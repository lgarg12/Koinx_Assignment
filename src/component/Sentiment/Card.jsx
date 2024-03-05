import React from 'react'
import { Text } from '../Text'


const Card = ({image,contentHeading,content,color}) => {
  return (
    <div className="flex flex-col w-[65%] gap-px">
        <div className={`flex flex-row justify-start items-start w-full gap-2 p-[17px] border-blue-50 border border-solid ${color} rounded-[12px]`}>
          {image}
          <div className="flex flex-col items-center justify-start w-[88%] mb-[21px] gap-2">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-start w-full">
                <Text as="p" className="w-[95%] !text-gray-900_04 !font-sfprotext leading-5">
                  {contentHeading}
                </Text>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full">
              <Text as="p" className="!text-blue_gray-700_01 !font-sfprotext !font-normal leading-5">
                {content}
              </Text>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card
