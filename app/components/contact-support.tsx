export default function ContactSupport() {
  return (
    <div className="text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Still have questions?
      </h3>
      <p className="text-gray-600 mb-8">Contact our support team</p>

      <div className="max-w-2xl mx-auto space-y-4">
        <textarea
          placeholder="Write your message..."
          className="w-full bg-white h-32 px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
          rows={5}
        />
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-full px-8 py-3 transition-colors w-full md:w-auto min-w-[150px]">
          Send
        </button>
      </div>
    </div>
  );
}

