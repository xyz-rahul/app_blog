'use client'
import { plugins } from './utils'
import { CommentsProvider } from '@udecode/plate-comments'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Plate } from '@udecode/plate-common'
import { Editor } from '../plate-ui/editor'
import { MentionCombobox } from '../plate-ui/mention-combobox'
import { CommentsPopover } from '../plate-ui/comments-popover'

export default function PlateEditor({ value }: { value: any }) {
    return (
        <DndProvider backend={HTML5Backend}>
            <CommentsProvider users={{}} myUserId="1">
                <Plate plugins={plugins} value={value}>
                    <Editor className="mt-8 p-8" readOnly={true} />
                    <MentionCombobox items={[]} />
                    <CommentsPopover />
                </Plate>
            </CommentsProvider>
        </DndProvider>
    )
}
