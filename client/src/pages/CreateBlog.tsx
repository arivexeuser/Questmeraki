import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Save, Upload, Image as ImageIcon, Bold, Italic, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Type, UnderlineIcon } from 'lucide-react';
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import Alert from '@mui/material/Alert';


const API_URL = import.meta.env.VITE_API_URL;

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [fontSize, setFontSize] = useState(16); // Default font size
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  const editor = useEditor({
    extensions: [
      StarterKit, // Underline extension is added separately below
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder.configure({
        placeholder: 'Start writing your amazing story...',
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        style: `font-size: ${fontSize}px;`,
      },
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    if (editor) {
      editor.view.dom.style.fontSize = `${newSize}px`;
    }
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    if (editor) {
      editor.view.dom.style.fontSize = `${newSize}px`;
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('subtitle', subtitle);
      formData.append('content', editor?.getHTML() || '');
      formData.append('category', category);
      if (imageFile) {
        formData.append('image', imageFile);
      }

      const response = await fetch(`${API_URL}/blogs`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });

      if (response.ok) {
        <Alert variant="outlined" severity="success">
           Blog Submited successfully...
        </Alert>
        navigate('/my-blogs');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to create blog post');
      }
    } catch (error) {
      setError('Failed to create blog post');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Blog Post</h1>
            <p className="text-gray-600 mb-6">Share your thoughts and ideas with the world</p>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white shadow-2xl rounded-2xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
              <div className="p-8">
                {error && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Title and Category Row */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="group">
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                        Story Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out group-hover:border-purple-300"
                        placeholder="Enter your story title"
                        required
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-2">
                        Short Description
                      </label>
                      <input
                        type="text"
                        id="subtitle"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        className="block w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out group-hover:border-purple-300"
                        placeholder="Enter a Short Description"
                        required
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="block w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out group-hover:border-purple-300"
                        required
                      >
                        <option value="">Select a category</option>
                        <option value="Technology">Technology</option>
                        <option value="Travel">Travel</option>
                        <option value="Food">Food</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Health">Health & Wellness</option>
                        <option value="Business">Business</option>
                        <option value="Education">Education</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Sports">Sports</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
                    <div className="mt-1 flex items-center">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        accept="image/*"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={triggerFileInput}
                        className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 group-hover:border-purple-300"
                      >
                        <Upload className="w-5 h-5 mr-2" />
                        {imageFile ? 'Change Image' : 'Upload Image'}
                      </button>
                      <span className="ml-4 text-sm text-gray-500">
                        {imageFile ? imageFile.name : 'Choose a beautiful cover image for your story'}
                      </span>
                    </div>

                    {imagePreview && (
                      <div className="mt-4 group">
                        <div className="h-48 w-full rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Rich Text Editor */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Story Content</label>

                    {/* Editor Toolbar */}
                    <div className="border border-gray-300 rounded-t-xl bg-gray-50 px-4 py-3 flex flex-wrap items-center gap-2">
                      {/* Font Size Controls */}
                      <div className="flex items-center space-x-2 border-r border-gray-300 pr-3">
                        <Type className="w-4 h-4 text-gray-600" />
                        <button
                          type="button"
                          onClick={decreaseFontSize}
                          className="p-1 hover:bg-gray-200 rounded text-sm font-bold"
                          title="Decrease font size"
                        >
                          A-
                        </button>
                        <span className="text-sm text-gray-600 min-w-[2rem] text-center">{fontSize}px</span>
                        <button
                          type="button"
                          onClick={increaseFontSize}
                          className="p-1 hover:bg-gray-200 rounded text-sm font-bold"
                          title="Increase font size"
                        >
                          A+
                        </button>
                      </div>

                      {/* Text Formatting */}
                      <div className="flex items-center space-x-1 border-r border-gray-300 pr-3">
                        <button
                          type="button"
                          onClick={() => editor?.chain().focus().toggleBold().run()}
                          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive('bold') ? 'bg-purple-100 text-purple-600' : 'text-gray-600'}`}
                          title="Bold"
                        >
                          <Bold className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => editor?.chain().focus().toggleItalic().run()}
                          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive('italic') ? 'bg-purple-100 text-purple-600' : 'text-gray-600'}`}
                          title="Italic"
                        >
                          <Italic className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => editor?.chain().focus().toggleUnderline().run()}
                          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive('underline') ? 'bg-purple-100 text-purple-600' : 'text-gray-600'}`}
                          title="Underline"
                        >
                          <UnderlineIcon className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Text Alignment */}
                      <div className="flex items-center space-x-1 border-r border-gray-300 pr-3">
                        <button
                          type="button"
                          onClick={() => editor?.chain().focus().setTextAlign('left').run()}
                          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive({ textAlign: 'left' }) ? 'bg-purple-100 text-purple-600' : 'text-gray-600'}`}
                          title="Align Left"
                        >
                          <AlignLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => editor?.chain().focus().setTextAlign('center').run()}
                          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive({ textAlign: 'center' }) ? 'bg-purple-100 text-purple-600' : 'text-gray-600'}`}
                          title="Align Center"
                        >
                          <AlignCenter className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => editor?.chain().focus().setTextAlign('right').run()}
                          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive({ textAlign: 'right' }) ? 'bg-purple-100 text-purple-600' : 'text-gray-600'}`}
                          title="Align Right"
                        >
                          <AlignRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Lists */}
                      <div className="flex items-center space-x-1">
                        <button
                          type="button"
                          onClick={() => editor?.chain().focus().toggleBulletList().run()}
                          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive('bulletList') ? 'bg-purple-100 text-purple-600' : 'text-gray-600'}`}
                          title="Bullet List"
                        >
                          <List className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive('orderedList') ? 'bg-purple-100 text-purple-600' : 'text-gray-600'}`}
                          title="Numbered List"
                        >
                          <ListOrdered className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Editor Content */}
                    <div className="border border-t-0 border-gray-300 rounded-b-xl overflow-hidden">
                      {editor && (
                        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                          <div className="flex bg-white shadow-lg rounded-lg p-1 border border-gray-200">
                            <button
                              type="button"
                              onClick={() => editor.chain().focus().toggleBold().run()}
                              className={`p-2 rounded ${editor.isActive('bold') ? 'bg-purple-100 text-purple-600' : 'text-gray-600'}`}
                            >
                              <Bold className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => editor.chain().focus().toggleItalic().run()}
                              className={`p-2 rounded ${editor.isActive('italic') ? 'bg-purple-100 text-purple-600' : 'text-gray-600'}`}
                            >
                              <Italic className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => editor.chain().focus().toggleUnderline().run()}
                              className={`p-2 rounded ${editor.isActive('underline') ? 'bg-purple-100 text-purple-600' : 'text-gray-600'}`}
                            >
                              <UnderlineIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </BubbleMenu>
                      )}

                      <EditorContent
                        editor={editor}
                        className="min-h-[400px] p-6 focus:outline-none prose max-w-none"
                        style={{ fontSize: `${fontSize}px` }}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-6 border-t border-gray-200">
                    <button
                      type="submit"
                      onChange={handleSubmit}
                      disabled={isSubmitting}
                      className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submiting Story...
                        </>
                      ) : (
                        <>
                          <Save className="w-5 h-5 mr-2" />
                          Submit Story
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}