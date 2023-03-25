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
  const [itemsPerPage, setItemsPerPage] = useState(10);


  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAdminUser());
  }, [dispatch]);


// a function to handle the status of each user
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
  const currentItems = user && user.length > 0 ? user.slice(indexOfFirstItem, indexOfLastItem) : [];


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (itemsPerPage) => {
    // Define handleItemsPerPageChange function
    setItemsPerPage(itemsPerPage);
  };

  return (
    <>
      <Style.Wrapper sx="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 h-[35rem]">
        <Style.Table sx="w-full text-sm text-left text-black bg-white p-4">
          <Style.THead sx="text-xs uppercase bg-[#F9FAFB] text-black">
            <Style.TR sx="relative">
              {table_head.map((item, id) => (
                <Style.TH scope="col" sx="px-4 py-3" key={id}>
                  <Style.Section sx="flex items-center">
                    {item.title}
                    <Style.Section
                      sx="cursor-pointer ml-2"
                    >
                      {item.sort}
                    </Style.Section>
                  </Style.Section>
                </Style.TH>
              ))}
              <Style.TH scope="col" sx="px-6 py-3">
                <Style.Span sx="sr-only">Action</Style.Span>
              </Style.TH>
            </Style.TR>
          </Style.THead>

          <Style.TBody>
            <>
              {loading ? (
                <Style.TR>
                    <Style.Text>loading...</Style.Text>
                </Style.TR>
              ) : error ? (
                <Style.TR>
                    <Style.Text>{error}</Style.Text>
                </Style.TR>
              ) : (
                <>
                  {currentItems?.map((item, id) => (
                    <Style.TR sx="bg-white text-[#545F7D relative" key={id}>
                      <Style.TH
                        scope="row"
                        sx="px-4 py-4 font-medium whitespace-nowrap ellipsis"
                      >
                        {item.orgName.length > 10
                          ? item.orgName.slice(0, 10) + "..."
                          : item.orgName}
                      </Style.TH>
                      <Style.TD sx="px-4 py-4 ellipsis">{item.userName}</Style.TD>
                      <Style.TD sx="px-4 py-4 ellipsis">{item.email}</Style.TD>
                      <Style.TD sx="px-4 py-4 ellipsis">{item.phoneNumber}</Style.TD>
                      <Style.TD sx="px-4 py-4 ellipsis">
                        {item.createdAt.length > 10
                          ? item.createdAt.slice(0, 10) + "..."
                          : item.createdAt}
                      </Style.TD>
                      <Style.TD
                        sx={`px-4 py-4 ellipsis items-center status__before__content ${
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
                      </Style.TD>
                      <Style.TD sx="px-4 py-4 text-right">
                        <Icons.LendqsrMore
                          sx="cursor-pointer"
                          onClick={() => setIsVisible(item.id)}
                        />

                        {isVisible === item.id && (
                          <Style.Wrapper sx="p-3 absolute top-0 right-9 bg-white rounded-md shadow-md items-start text-left z-50">
                            <Style.Section sx="flex flex-col space-y-2 items-start text-left">
                              <Style.Text
                                onClick={() =>
                                  navigate(`/dashboard/user/${item.id}`)
                                }
                                sx="cursor-pointer flex items-center gap-2"
                              >
                                <Icons.LendqsrViewDetails />View Details
                              </Style.Text>
                              <Style.Text sx="activate flex items-center gap-2">
                                <Icons.LendqsrActivateUserIcon />   Activate User
                              </Style.Text>
                              <Style.Text sx="blacklist flex items-center gap-2">
                                 <Icons.LendqsrBlackListUserIcon />  Blacklist User
                              </Style.Text>
                            </Style.Section>
                          </Style.Wrapper>
                        )}
                      </Style.TD>
                    </Style.TR>
                  ))}
                </>
              )}
            </>
          </Style.TBody>
        </Style.Table>
      </Style.Wrapper>

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
