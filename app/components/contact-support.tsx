export default function ContactSupport() {
  return (
    <div className="text-center  py-10">
      <h3 className="text-3xl md:text-4xl font-semibold text-black mb-2">
        Still have questions?
      </h3>
      <p className="text-[#666666] mb-8">Contact our support team</p>

      <div className="max-w-3xl mx-auto space-y-4    ">
        <textarea
          placeholder="Write your message..."
          className="w-full bg-white h-52 px-6 py-4 rounded-lg border border-[#CECDC4] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
          rows={5}
        />
        <button className="bg-[#FF9D00] hover:bg-orange-400 text-white font-semibold rounded-full px-8 py-3 transition-colors w-full md:w-auto min-w-[200px]">
          Send
        </button>
      </div>
    </div>
  );
}

