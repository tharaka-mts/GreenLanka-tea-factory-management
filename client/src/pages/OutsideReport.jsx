import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const OutsideReport = () => {
    const { currentColor } = useStateContext();
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <p style={{ color: currentColor }} class="text-center  text-5xl font-black">Outside Tea Estates</p>
            <p style={{ color: currentColor }} class="text-center mt-3 text-3xl font-black">Monthly Income Report</p>
            <p style={{ color: currentColor }} class="text-center mt-3 text-xl font-black">Reporting Period: 01 July 2023 - 31 July 2023</p>

            <p class="text-gray-900 mt-8 text-xl font-black">Income</p>

            <p class="text-gray-900 m-4 mt-1 text-min font-black">Total Quantity Produced</p>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div class="min-w-full py-2 inline-block sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <tbody>
                                    <tr class="bg-gray-100 border-b">
                                        <td class="px-24 py-1 whitespace-nowrap text-sm font-medium text-gray-900">Grade A</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">
                                            1,240 kg
                                        </td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">
                                            LKR 607,600
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-24 py-1 whitespace-nowrap text-sm font-medium text-gray-900">Grade B</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">1,540 kg</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">LKR 669,900</td>
                                    </tr>
                                    <tr class="bg-gray-100 border-b">
                                        <td class="px-24 py-1 whitespace-nowrap text-sm font-medium text-gray-900">Grade C</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">1,318 kg</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">LKR 520,610</td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-24 py-1 whitespace-nowrap text-sm font-medium text-gray-900">Grade D</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">1,360 kg</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">LKR 476,227</td>
                                    </tr>
                                    <tr class="bg-gray-200 border-b">
                                        <td class="font-black px-24 py-2 whitespace-nowrap text-min  text-gray-900">Total</td>
                                        <td class="text-right font-black px-24 py-2 whitespace-nowrap text-min  text-gray-900">5,458 kg</td>
                                        <td class="text-right font-black px-24 py-2 whitespace-nowrap text-min  text-gray-900">LKR 2,274,337</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <p class="text-gray-900 mt-10 text-xl font-black">Expences</p>
            <p class="text-gray-900 m-4 mt-1 text-min font-black">Equipment & Machinery Utilization</p>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div class="min-w-full py-2 inline-block sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <tbody>
                                    <tr class="bg-gray-100 border-b">
                                        <td class="px-24 py-1 whitespace-nowrap text-sm font-medium text-gray-900">Withering Machine</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">
                                            250 h
                                        </td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">
                                            LKR 50,000
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-24 py-1 whitespace-nowrap text-sm font-medium text-gray-900">Rolling Machine</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">
                                            220 h
                                        </td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">
                                            LKR 44,000
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-100 border-b">
                                        <td class="px-24 py-1 whitespace-nowrap text-sm font-medium text-gray-900">Drying Equipments</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">
                                            200 h
                                        </td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">
                                            LKR 40,000
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-200 border-b">
                                        <td class="font-black px-24 py-2 whitespace-nowrap text-min  text-gray-900">Total</td>
                                        <td class="text-right font-black px-24 py-2 whitespace-nowrap text-min  text-gray-900">
                                            670 h
                                        </td>
                                        <td class="text-right font-black px-24 py-2 whitespace-nowrap text-min  text-gray-900">
                                            LKR 134,000
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <p class="text-gray-900 m-4 mt-8 text-min font-black">Energy Consumption</p>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div class="min-w-full py-2 inline-block sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <tbody>
                                    <tr class="bg-gray-100 border-b">
                                        <td class="px-24 py-1 whitespace-nowrap text-sm font-medium text-gray-900">Electricity</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">
                                            10,000 kWh
                                        </td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">
                                            LKR 209,500
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-24 py-1 whitespace-nowrap text-sm font-medium text-gray-900">Fuel</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">
                                            325 L
                                        </td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">
                                            LKR 113,750
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-200 border-b">
                                        <td class="font-black px-24 py-2 whitespace-nowrap text-min  text-gray-900">Total</td>
                                        <td>
                                        </td>
                                        <td class="text-right font-black px-24 py-2 whitespace-nowrap text-min  text-gray-900">
                                            LKR 323,250
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <p class="text-gray-900 m-4 mt-8 text-min font-black">Transportation</p>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div class="min-w-full py-2 inline-block sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <tbody>
                                    <tr class="bg-gray-100 border-b">
                                        <td class="px-24 py-1 whitespace-nowrap text-sm font-medium text-gray-900">Utilization</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">
                                            10,500 km
                                        </td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">
                                            LKR 52,500
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-200 border-b">
                                        <td class="font-black px-24 py-2 whitespace-nowrap text-min  text-gray-900">Total</td>
                                        <td>
                                        </td>
                                        <td class="text-right font-black px-24 py-2 whitespace-nowrap text-min  text-gray-900">
                                            LKR 52,500
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <p class="text-gray-900 m-4 mt-8 text-min font-black">Payment for tea leaves</p>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div class="min-w-full py-2 inline-block sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <tbody>
                                    <tr class="bg-gray-100 border-b">
                                        <td class="px-24 py-1 whitespace-nowrap text-sm font-medium text-gray-900">Kumara Estate</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">LKR 253,000</td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-24 py-1 whitespace-nowrap text-sm font-medium text-gray-900">Sumudu Estate</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">LKR 215,000</td>
                                    </tr>
                                    <tr class="bg-gray-100 border-b">
                                        <td class="px-24 py-1 whitespace-nowrap text-sm font-medium text-gray-900">Gamage Tea</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">LKR 404,745</td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-24 py-1 whitespace-nowrap text-sm font-medium text-gray-900">Konara Tea</td>
                                        <td class="text-right text-sm text-gray-900 font-light px-24 py-1 whitespace-nowrap">LKR 270,284</td>
                                    </tr>
                                    <tr class="bg-gray-200 border-b">
                                        <td class="font-black px-24 py-2 whitespace-nowrap text-min  text-gray-900">Total</td>
                                        <td class="text-right font-black px-24 py-2 whitespace-nowrap text-min  text-gray-900">LKR 943,029</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class=" mt-20 flex flex-col">
                <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div class="min-w-full py-2 inline-block sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <tbody>
                                    <tr class="bg-gray-100 border-b">
                                        <td class="font-black px-24 py-2 whitespace-nowrap text-lg text-gray-900">Total Income</td>
                                        <td class="text-right font-black px-24 py-2 whitespace-nowrap text-lg  text-gray-900">LKR 2,274,337</td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="font-black px-24 py-2 whitespace-nowrap text-lg  text-gray-900">Total Expences</td>
                                        <td class="text-right font-black px-24 py-2 whitespace-nowrap text-lg  text-gray-900">LKR 1,310,879</td>
                                    </tr>
                                    <tr class="bg-gray-200 border-b">
                                        <td class="font-black px-24 py-2 whitespace-nowrap text-xl text-gray-900">Net Profit</td>
                                        <td class="text-right font-black px-24 py-2 whitespace-nowrap text-xl text-gray-900">LKR 963,458</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OutsideReport;