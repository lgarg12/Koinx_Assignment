import React from 'react'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { Img } from '../Img'
import { Button } from '../Button'
import Line from './Line'

const About = () => {
  return (
    <div className="space-y-5 px-5 bg-white m-5 p-4">
        <div className="flex flex-row justify-start w-full">
          <Heading as="h4">About Bitcoin</Heading>
        </div>
        <div className="flex flex-col items-center justify-start w-[91%] gap-[15px]">
          <div className="flex flex-col items-start justify-start w-full">
            <Heading size="md" as="h6" className="!text-gray-900_06 !font-bold">
              What is Bitcoin?
            </Heading>
            <Text size="2xl" as="p" className="mt-2.5 !text-gray-800 !leading-[160%]">
              Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is
              +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of
              $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply
              of 19.24 M BTC and a max supply of 21 M BTC.
            </Text>
            <Line/>
            <Heading size="md" as="h6" className="mt-[15px] !text-gray-900_06 !font-bold">
              Lorem ipsum dolor sit amet
            </Heading>
            <Text size="2xl" as="p" className="mt-[9px] !text-gray-800 !leading-[160%]">
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam
              id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
              pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus. <br /><br />
              Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque
              auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus
              phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id
              imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa
              turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer
              pellentesque enim convallis ultricies at.
              <br /><br />
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac.
              Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis
              lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
              dui
            </Text>
            <Line/>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[15px]">
            <div className="flex flex-col items-start justify-start w-full gap-2">
              <div className="flex flex-row justify-start py-1.5">
                <Heading as="h4" className="mt-[3px]">
                  Already Holding Bitcoin?
                </Heading>
              </div>
              <div className="flex flex-row w-full pr-[15px] gap-[31px]">
                <div className="flex flex-row justify-start items-start w-[49%] gap-[27px] p-[11px] bg-gradient1 rounded-[7px]">
                  <Img
                    src="images/img_rectangle_11947.png"
                    alt="image"
                    className="w-[128px] mt-px object-cover rounded-lg"
                  />
                  <div className="flex flex-col items-start justify-start w-[54%] mt-[9px] mr-3.5 gap-4">
                    <div className="flex flex-row justify-start w-full">
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row justify-start w-full">
                          <Heading size="lg" as="h5" className="!text-white-A700">
                            Calculate your Profits
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <Button
                      color="white_A700"
                      size="md"
                      rightIcon={
                        <Img
                          src="images/img_iconly_light_arrow_right.svg"
                          alt="Iconly/Light/Arrow - Right"
                        />
                      }
                      className="gap-1.5 font-semibold min-w-[132px]"
                    >
                      Check Now
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-start w-[49%] gap-[27px] p-[11px] bg-gradient2 rounded-[7px]">
                  <Img
                    src="images/img_rectangle_11947_128x128.png"
                    alt="image"
                    className="w-[128px] mt-px object-cover rounded-lg"
                  />
                  <div className="flex flex-col items-start justify-start w-[54%] mt-[9px] mr-3.5 gap-4">
                    <div className="flex flex-row justify-start w-full">
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row justify-start w-full">
                          <Heading size="lg" as="h5" className="!text-white-A700">
                            Calculate your tax liability
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <Button
                      color="white_A700"
                      size="md"
                      rightIcon={
                        <Img
                          src="images/img_iconly_light_arrow_right.svg"
                          alt="Iconly/Light/Arrow - Right"
                        />
                      }
                      className="gap-1.5 font-semibold min-w-[132px]"
                    >
                      Check Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-blue_gray-100_99" />
          </div>
          <Line/>
          <Text size="2xl" as="p" className="mt-[9px] !text-gray-800 !leading-[160%]">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
          </Text>
        </div>
    </div>
  )
}

export default About
