import { LuTestTubeDiagonal } from "react-icons/lu"
import { MdSpeakerNotes } from "react-icons/md"

interface notes {
  notes: any
}
export default function Notes({ notes }: notes) {
  console.log(notes, "shadulla")
  return (
    <>
      {
        notes && (
          <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-sm p-5">

            {/* Heading (index 0) */}
            {notes[0] && (
              <h3 className="text-base flex gap-2 items-center font-semibold text-blue-800 mb-2">
                <LuTestTubeDiagonal />{notes[0]}
              </h3>
            )}

            {/* Remaining content */}
            <div className="space-y-2">
              {notes?.slice(1).map((line: string, index: number) => (
                <p key={index} className="text-sm text-gray-700 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>

            {/* Optional accent line */}
            <div className="mt-4 h-1 w-12 bg-blue-500 rounded-full"></div>
          </div>
        )
      }
    </>
  )
}