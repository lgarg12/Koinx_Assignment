import React from 'react';
import { Img } from '../Img';
import { Text } from '../Text';
import { Heading } from '../Heading';
import Card from './Card';

const Sentiment = () => {
  return (
    <div className="px-5 bg-white m-5 p-4">
      <div className="flex flex-col gap-5">
        <div className=""/>
          <div className="flex flex-row justify-start">
            <Heading as="h4">Sentiment</Heading>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <div className="flex flex-row justify-start">
                  <Heading size="md" as="h6" className="!text-blue_gray-800_02 !text-[18.91px]">
                    Key Events
                  </Heading>
                </div>
                <Img
                  src="images/img_svg_margin_blue_gray_400_01.svg"
                  alt="svgmargin_three"
                  className="h-[20px]"
                />
              </div>
              <div className='flex gap-2 items-center'>
                <Card color={'bg-blue-50'} image={<Img src="images/img_aside.svg" alt="image" className="h-[147px]" />} contentHeading={'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enimtincidunt.'} content={'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.'}/>
                <Card color={'bg-[#EBF9F4]'} image={<Img
                  src="images/img_frame_1116601921.svg"
                  alt="circleimage"
                  className="h-[44px] w-[44px] mt-px rounded-[50%]"
                />} contentHeading={'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enimtincidunt.'} content={'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.'}/>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full pb-[22px] gap-[21px]">
              <div className="flex flex-row items-center w-full gap-2">
                <div className="flex flex-row justify-start">
                  <Heading size="md" as="h6" className="!text-blue_gray-800_02 !text-[18.91px]">
                    Analyst Estimates
                  </Heading>
                </div>
                <Img
                  src="images/img_svg_margin_blue_gray_400_01.svg"
                  alt="svgmargin_five"
                  className="h-[20px]"
                />
              </div>
              <div className="flex flex-row justify-center items-center w-full">
                <div className="flex flex-row justify-start w-[22%]">
                  <div className="flex flex-col items-center justify-center w-[75%] p-[27px] bg-blue_gray-50 rounded-[50%]">
                    <div className="flex flex-row justify-start items-center p-10 bg-[#EBF9F4] rounded-full text-green-400">
                      <div className="flex flex-col items-center justify-center w-[74%]">
                        <Text size="4xl" as="p" className="h-[45px] mb-px !text-teal-A700 !text-[36.41px]">
                          76
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[24%]">
                        <Text size="2xl" as="p" className="!text-teal-A700">
                          %
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[78%] gap-px text-[#7C7E8C]">
                  <div className="flex flex-row justify-start items-center w-full p-2">
                    <div className="flex flex-row justify-start w-[10%]">
                      <Text size="xl" as="p" className="mt-0.5 !text-blue_gray-400_01">
                        Buy
                      </Text>
                    </div>
                    <div className="h-[8px] w-[65%] bg-teal-500 rounded-sm" />
                    <div className="flex flex-row justify-end w-[8%]">
                      <Text as="p" className="!text-blue_gray-400_01 !text-[14.25px]">
                        76%
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full p-2">
                    <div className="flex flex-row justify-start w-[10%]">
                      <Text size="xl" as="p" className="mt-px !text-blue_gray-400_01 !text-[15.13px]">
                        Hold
                      </Text>
                    </div>
                    <div className="h-[8px] w-[7%] bg-gray-400 rounded-sm" />
                    <div className="flex flex-row justify-center w-[8%]">
                      <Text size="xl" as="p" className="!text-blue_gray-400_01 !text-[15.63px]">
                        8%
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full p-2">
                    <div className="flex flex-row justify-start w-[10%]">
                      <Text size="xl" as="p" className="mt-px !text-blue_gray-400_01 !text-[15.13px]">
                        Sell
                      </Text>
                    </div>
                    <div className="h-[8px] w-[13%] bg-red-500 rounded-sm" />
                    <div className="flex flex-row justify-end w-[8%]">
                      <Text size="xl" as="p" className="!text-blue_gray-400_01 !text-[15.63px]">
                        16%
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sentiment
