import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { table_head } from "../../common/data/data";
import { Style } from "../../common/styled/Styled";
import { Icons } from "../../constant/Icons";
import { fetchAdminUser, selectUser } from "../../state/slice/User-Slice";
import Pagination from "../../common/pagination/Pagination";

const Table = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector(selectUser);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Define itemsPerPage state

  const navigate = useNavigate();


  useEffect(() => {
    dispatch(fetchAdminUser());
  }, [dispatch]);

  const getStatus = (user) => {
    const createdAt = new Date(user.createdAt);
    const currentTime = new Date();
    const timeDiff = Math.abs(currentTime - createdAt);
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24 * 365));
    if (daysDiff < 30) {
      return "pending";
    } else if (daysDiff >= 30 && daysDiff < 180) {
      return "active";
    } else if (daysDiff >= 180 && daysDiff > 365) {
      return "Inactive";
    } else {
      return "blacklisted";
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = user?.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (itemsPerPage) => { // Define handleItemsPerPageChange function
    setItemsPerPage(itemsPerPage);
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 h-[35rem]">
        <table className="w-full text-sm text-left text-black bg-white p-4">
          <thead className="text-xs uppercase bg-[#F9FAFB] text-black">
            <tr className="relative">
              {table_head.map((item, id) => (
                <th scope="col" className="px-4 py-3" key={id}>
                  <div className="flex items-center">
                    {item.title}
                    <Style.Section sx="cursor-pointer ml-2">
                      {item.sort}
                    </Style.Section>
                  </div>
                </th>
              ))}
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <>
              {loading ? (
                <tr>
                  <td colSpan="7">Loading...</td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="7">Error: {error}</td>
                </tr>
              ) : (
                <>
                  {currentItems?.map((item, id) => (
                    <tr className="bg-white text-[#545F7D relative" key={id}>
                      <th
                        scope="row"
                        className="px-4 py-4 font-medium whitespace-nowrap ellipsis"
                      >
                        {item.orgName.length > 10
                          ? item.orgName.slice(0, 10) + "..."
                          : item.orgName}
                      </th>
                      <td className="px-4 py-4 ellipsis">{item.userName}</td>
                      <td className="px-4 py-4 ellipsis">{item.email}</td>
                      <td className="px-4 py-4 ellipsis">{item.phoneNumber}</td>
                      <td className="px-4 py-4 ellipsis">
                        {item.createdAt.length > 10
                          ? item.createdAt.slice(0, 10) + "..."
                          : item.createdAt}
                      </td>
                      <td
                        className={`px-4 py-4 ellipsis items-center status__before__content ${
                          getStatus(item).toString().toLowerCase() === "active"
                            ? "active"
                            : getStatus(item) === "blacklisted"
                            ? "blacklisted"
                            : getStatus(item) === "Inactive"
                            ? "Inactive"
                            : getStatus(item) === "pending"
                            ? "pending"
                            : "pending"
                        }`}
                      >
                        {getStatus(item)}
                      </td>
                      <td className="px-4 py-4 text-right">
                        <Icons.LendqsrMore
                          className="cursor-pointer"
                          onClick={() => setIsVisible(item.id)}
                        />

                        {isVisible === item.id && (
                          <div className="p-3 absolute top-0 right-9 bg-white rounded-md shadow-md items-start text-left z-50">
                            <div className="flex flex-col space-y-2 items-start text-left">
                              <p
                                onClick={() =>
                                  navigate(`/dashboard/user/${item.id}`)
                                }
                                className="cursor-pointer"
                              >
                                View Details
                              </p>
                              <p className="cursor-pointer activate">
                                Activate User
                              </p>
                              <p className="cursor-pointer blacklist">
                                Blacklist User
                              </p>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </>
          </tbody>
        </table>
      </div>

      <Pagination
      currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={user?.length}
        onPageChange={handlePageChange}
        onChangeItemsPerPage={handleItemsPerPageChange}
      />
    </>
  );
};

export default Table;
