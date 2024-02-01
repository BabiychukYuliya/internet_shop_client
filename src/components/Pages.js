import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index";
import { Pagination } from "react-bootstrap";

const Pages = observer(() => {
  const { device } = useContext(Context);
  const pages = [1, 2, 3, 4, 5, 6];
  return (
    <Pagination>
      {pages.map((page) => (
        <Pagination.Item>{page}</Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;
