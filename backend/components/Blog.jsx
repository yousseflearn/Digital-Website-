'use client';
import Spinner from './Spinner';
import ReactMarkdown from 'react-markdown';
import dynamic from 'next/dynamic';
import 'react-markdown-editor-lite/lib/index.css';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});
export default function Blog() {
  return (
    <>
      <form className="addWebsiteform">
        {/* blog title */}
        <div className="w-100 flex flex-col flex-left mb-2">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" placeholder="Enter small title" />
        </div>

        {/* blog slug url */}
        <div className="w-100 flex flex-col flex-left mb-2">
          <label htmlFor="slug">Slug (seo friendly url)</label>
          <input type="text" id="slug" placeholder="Enter slug url" />
        </div>

        {/* blog category */}
        <div className="w-100 flex flex-col flex-left mb-2">
          <label htmlFor="category">
            Select category (for multi select press ctr + mouse left key)
          </label>
          <select name="category" id="category" multiple>
            <option value="Node js">Node JS</option>
            <option value="React js">React Js</option>
            <option value="Next js">Next Js</option>
            <option value="Css">Css</option>
            <option value="Digital marketing">Digital Marketing</option>
            <option value="Flutter dev">Flutter Dev</option>
            <option value="Database">Database</option>
            <option value="Deployment">Deployment</option>
          </select>
        </div>

        {/* blog images */}
        <div className="w-100 flex flex-col flex-left mb-2">
          <div className="w-100">
            <label htmlFor="images">
              Images (first image will be show as thumbnail, you can drag)
            </label>
            <input
              type="file"
              id="fileInput"
              className="mt-1"
              accept="image/*"
              multiple
            />
          </div>
          <div className="w-100 flex flex-left mt-1">
            <Spinner />
          </div>
        </div>

        {/* image preview and image sortable */}
        {/* pending */}

        {/* markdown description */}
        <div className="description w-100 flex flex-col flex-left mb-2">
          <label htmlFor="description">
            Blog Content (for image: first upload and copy link and past in
            ![alt text](link))
          </label>
          <MdEditor
            style={{ height: '500px', width: '100%' }} // you can adjust the height as needed
            renderHTML={(text) => (
              <ReactMarkdown
                components={{
                  code: ({ node, inline, className, children, ...props }) => {
                    // for code
                    const match = /language-(\w+)/.exec(className || '');

                    if (inline) {
                      return <code>{children}</code>;
                    } else if (match) {
                      return (
                        <div>
                          <pre
                            style={{
                              padding: 0,
                              borderRadius: '5px',
                              overflow: 'auto',
                              whiteSpace: 'pre-wrap',
                            }}
                            {...props}
                          >
                            <code>{children}</code>
                          </pre>
                          <button
                            style={{
                              position: 'absolute',
                              top: 0,
                              right: '0',
                              zIndex: '1',
                            }}
                            onClick={() =>
                              navigator.clipboard.writeText(children)
                            }
                          >
                            copy code
                          </button>
                        </div>
                      );
                    }
                  },
                }}
              >
                {text}
              </ReactMarkdown>
            )}
          />
        </div>

        {/* tags */}
        <div className="w-100 flex flex-col flex-left mb-2">
          <label htmlFor="tags">Tags</label>
          <select name="tags" id="tags" multiple>
            <option value="html">html</option>
            <option value="css">css</option>
            <option value="javascript">javascript</option>
            <option value="nextjs">nextjs</option>
            <option value="reactjs">reactjs</option>
            <option value="database">database</option>
          </select>
        </div>

        {/* blog status */}
        <div className="w-100 flex flex-col flex-left mb-2">
          <label htmlFor="status">Status</label>
          <select name="status" id="status">
            <option value="">No select</option>publish
            <option value="draft">Draft</option>
            <option value="publish">Publish</option>
          </select>
        </div>

        <div className="w-100 mb-1 mt-1">
          <button type="submit" className="w-100  text-center">
            SAVE BLOG
          </button>
        </div>
      </form>
    </>
  );
}
