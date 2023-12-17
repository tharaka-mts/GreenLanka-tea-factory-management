import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function confirmMessage() {
  var msg = "no";
  withReactContent(Swal)
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    }, (msg = "yes"));
  return msg;
}

export function successMessage() {
  withReactContent(Swal).fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
}
