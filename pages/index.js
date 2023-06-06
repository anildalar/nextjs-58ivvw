import BasicTable from '../components/BasicTable';
import GroupTable from '../components/GroupTable';
import classes from '../styles/Home.module.scss';
import SortingTable from '../components/SortingTable';
import FilteringTable from '../components/FilteringTable';
import PaginationTable from '../components/PaginationTable';
import RowSelectionTable from '../components/RowSelectionTable';
import ColumnOrderTable from '../components/ColumnOrderTable';
import HidingColumnTable from '../components/ColumnHidingTable';

export default function Home() {
  return (
    <div className={classes.container}>
      <h1>React Table</h1>
      <FilteringTable />
      {/* <GroupTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelectionTable /> */}
      {/* <ColumnOrderTable /> */}
      {/* <HidingColumnTable /> */}
    </div>
  );
}
