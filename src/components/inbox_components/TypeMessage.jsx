export default function TypeMessage() {
  return (
    <div className="flex pr-2 py-6 gap-4">
      <input
        type="text"
        placeholder="Type a message"
        className="border-2 border-primary-gray-light h-10 flex-grow px-5 rounded outline-none"
      />
      <button className="bg-primary-blue text-white px-4 py-2 rounded hover:opacity-90 active:opacity-100">
        Send
      </button>
    </div>
  );
}
