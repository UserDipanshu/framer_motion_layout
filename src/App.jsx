import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
	{ id: 1, title: "Title 1", subtitle: "Subtitle 1" },
	{ id: 2, title: "Title 2", subtitle: "Subtitle 2" },
	{ id: 3, title: "Title 2", subtitle: "Subtitle 2" },
	{ id: 4, title: "Title 2", subtitle: "Subtitle 2" },
	{ id: 5, title: "Title 2", subtitle: "Subtitle 2" },
	{ id: 6, title: "Title 3", subtitle: "Subtitle 3" },
];

const ExampleComponent = () => {
	const [selectedId, setSelectedId] = useState(null);

	return (
		<div className='boxCont'>
			<div className='cont'>
				{items.map((item) => (
					<motion.div
						key={item.id}
						layoutId={item.id}
						onClick={() => setSelectedId(item.id)}
						style={{ cursor: "pointer" }}
						className='itemCont'
					>
						<motion.h5>{item.subtitle}</motion.h5>
						<motion.h2>{item.title}</motion.h2>
					</motion.div>
				))}

				<AnimatePresence>
					{selectedId && (
						<motion.div
							key={selectedId}
							layoutId={selectedId}
							exit={{ opacity: 0 }}
							className='selectedItem'
						>
							<motion.h5>{items[selectedId - 1].subtitle}</motion.h5>
							<motion.h2>{items[selectedId - 1].title}</motion.h2>
							<motion.button onClick={() => setSelectedId(null)}>
								Close
							</motion.button>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default ExampleComponent;
