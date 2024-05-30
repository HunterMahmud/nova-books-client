import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";
import ReadListTableView from "../components/ReadListTableView";
import useAuthProvider from "../hooks/useAuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ReadList = () => {
  const { user } = useAuthProvider();
  const axiosSecure = useAxiosSecure();
  const [readList, setReadList] = useState([]);
  // console.log(user);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosSecure.get(`/readlist/${user?.email}`);
      setReadList(data);
    };
    fetchData();
  }, [user]);
//   console.log(readList);
  if (readList.length == 0)
    return (
      <div className="flex justify-center items-center  h-[calc(100vh-248.4px)]">
        <h2 className="text-xl font-bugrasimo">No data available</h2>
      </div>
    );
  return (
    <div className="max-w-[85rem] mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Read List | BookShelf</title>
      </Helmet>
      <ScrollRestoration />
      <h1
        data-aos="fade-down"
        className="text-3xl lg:text-5xl font-bold font-bugrasimo text-center mt-7 my-3 dark:text-gray-100 text-gray-900"
      >
        Your Read List
      </h1>
      <p
        data-aos="fade-down"
        data-aos-delay={100}
        className="text-center text-gray-800 dark:text-gray-100"
      >
        Here is the list of all the books you have read.
      </p>
      <div className="max-w-7xl mx-auto">
      <div className=" py-10 mx-auto">
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                      <thead className="bg-gray-50 dark:bg-neutral-800">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                Image {"&"} Book Name
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                Category
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                Author
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                Ratings
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                Action
                              </span>
                            </div>
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                        {readList.map((book) => (
                          <ReadListTableView key={book._id} book={book} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ReadList;
