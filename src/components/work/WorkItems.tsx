import React from 'react';

interface WorkItem {
  id: string | number;
  image: string;
  title: string;
  category: string;
}

const WorkItems = ({ item }: { item: WorkItem }) => {
  const [showPreview, setShowPreview] = React.useState(false);

  React.useEffect(() => {
    if (!showPreview) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowPreview(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showPreview]);

  return (
    <div className="work__card">
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <button type="button" onClick={() => setShowPreview(true)} className="work__button work__button-demo">
        Demo <i className="uil uil-arrow-right work__button-icon"></i>
      </button>

      {showPreview && (
        <div className="work__modal" role="dialog" aria-modal="true" aria-label={item.title}>
          <div className="work__modal-content">
            <button type="button" className="work__modal-close" onClick={() => setShowPreview(false)} aria-label="Close image preview">×</button>
            <img src={item.image} alt={item.title} className="work__modal-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkItems;
