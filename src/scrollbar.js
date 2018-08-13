import PerfectScrollbar from "perfect-scrollbar";
const ps = new PerfectScrollbar(".playlist__content", {
  handlers: ["drag-thumb", "keyboard", "wheel", "touch"],
  wheelSpeed: 1,
  wheelPropagation: false
});