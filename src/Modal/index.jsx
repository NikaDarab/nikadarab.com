const Modal = ({ showModal, setShowModal, content, width}) => {
  return (
    <>
      {showModal ? (
        <div className="flex text-center justify-center items-center fixed inset-0 outline-none focus:outline-none animate__animated animate__fadeInDown overflow-scroll text-sm">
          <div className="relative w-auto my-6 mx-auto">
            <div className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ${width}`}>
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t" />
              <div className="relative p-6 flex-auto">
                {content}
              </div>
              <div className="flex items-center justify-end p-6  border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                 
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;