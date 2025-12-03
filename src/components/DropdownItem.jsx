import { motion, AnimatePresence } from "framer-motion";

const DropdownItem = ({ index, title, tools, open }) => {
  return (
    <div
      className={`w-full cursor-pointer ${
        index > 0 ? "border-b" : "border-b border-t"
      } p-5 flex flex-col gap-5`}
    >
      <h3 className="text-4xl">{title.toUpperCase()}</h3>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden text-gray-700 grid grid-cols-2 gap-4 bg-accent p-5 rounded"
          >
            {tools.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  className="flex flex-col items-center bg-white py-5 rounded"
                  key={idx}
                >
                  <Icon size={20} color={item.color} />
                  <p>{item.name}</p>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownItem;
