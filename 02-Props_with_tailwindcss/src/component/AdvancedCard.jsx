import React from "react";

function AdvancedCard() {
  return (
    <>
      <section class="relative overflow-hidden py-10 border-1 border-black">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center bg-blue-300">
            <div className="w-full lg:-mr-2 lg:w-1/3">
              <div className="mx-auto max-w-sm rounded-md border border-gray-200 bg-white pb-20 pl-5 pr-8 pt-6 lg:pb-8">
                <span className="mb-2 block text-sm font-semibold text-gray-400">
                  PREMIUM
                </span>
                <span className="flex items-end">
                  <span className="text-4xl font-extrabold leading-none">
                    $150
                  </span>
                  <span className="text-sm font-semibold">/month</span>
                </span>
                <div className="mt-7 border-t border-gray-100 pt-5">
                  <ul className="mb-10">
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-gray-900">
                        No Discount
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-gray-900">
                        Basic Support
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-gray-900">
                        Ads Banner Free
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-gray-900">
                        Design Style
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-gray-900">
                        Component Library
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-gray-900">
                        All limited links
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-gray-900">
                        Own analytics platform
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-gray-900">
                        Chat support
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-gray-900">
                        Optimize hashtags
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-gray-900">
                        Unlimited users
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdvancedCard;
