export const baseStyles = {
    solid:
      'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
    outline:
      'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none'
  }
  
  type Variant = 'solid' | 'outline';
  type Color = 'slate' | 'blue' | 'white' | 'red';
  
  export const variantStyles: Record<Variant, Record<Color, string>> = {
    solid: {
      slate: 'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
      blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
      red: 'bg-red-400 text-white hover:text-slate-100 hover:bg-red-500 active:bg-red-700 active:text-red-100 focus-visible:outline-red-600',
      white: 'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white'
    },
    outline: {
      slate: 'ring-slate-200 text-slate-700 ring-slate-300 hover:text-slate-900 hover:ring-slate-600 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
      blue: 'ring-blue-200 text-blue-700 ring-blue-300 hover:text-blue-900 hover:ring-blue-600 active:bg-blue-100 active:text-blue-600 focus-visible:outline-blue-600 focus-visible:ring-blue-300',
      red: 'ring-red-200 text-red-700 ring-red-300 hover:text-red-900 hover:ring-red-600 active:bg-red-100 active:text-red-600 focus-visible:outline-red-600 focus-visible:ring-red-300',
      white: 'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white'
    }
  };
  
  export const formClasses = 'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm'

  export const inputClasses = 'peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'


  export const iconClasses = 'pointer-events-none h-[18px] w-[18px] peer-focus:text-gray-900'

  export const iconInputClass= `${iconClasses} absolute left-3 top-1/2  -translate-y-1/2 text-gray-500`