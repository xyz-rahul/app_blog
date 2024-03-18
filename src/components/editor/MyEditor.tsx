'use client'
import { plugins } from './utils'
import { CommentsProvider } from '@udecode/plate-comments'
import debounce from 'debounce'
import { useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Plate } from '@udecode/plate-common'
import { FixedToolbar } from '../plate-ui/fixed-toolbar'
import { FixedToolbarButtons } from '../plate-ui/fixed-toolbar-buttons'
import { Editor } from '../plate-ui/editor'
import { FloatingToolbar } from '../plate-ui/floating-toolbar'
import { FloatingToolbarButtons } from '../plate-ui/floating-toolbar-buttons'
import { MentionCombobox } from '../plate-ui/mention-combobox'
import { CommentsPopover } from '../plate-ui/comments-popover'

const initialValue = [
    {
        id: '1',
        type: 'p',
        children: [{ text: 'write something here...' }],
    },
]

export default function PlateEditor() {
    const [state, setState] = useState(() => {
        try {
            const store = localStorage.getItem('editor_item')
            return store ? JSON.parse(store) : initialValue
        } catch (e: any) {
            localStorage.removeItem('editor_item')
            return initialValue
        }
    })

    const set_editor_local_storage = debounce(
        () => localStorage.setItem('editor_item', JSON.stringify(state)),
        2000
    )

    useEffect(() => {
        set_editor_local_storage()
    }, [state])
    return (
        <DndProvider backend={HTML5Backend}>
            <CommentsProvider users={{}} myUserId="1">
                <Plate plugins={plugins} value={state} onChange={setState}>
                    <FixedToolbar>
                        <FixedToolbarButtons />
                    </FixedToolbar>

                    <Editor className="mt-8 p-8" />

                    <FloatingToolbar>
                        <FloatingToolbarButtons />
                    </FloatingToolbar>
                    <MentionCombobox items={[]} />
                    <CommentsPopover />
                </Plate>
            </CommentsProvider>
        </DndProvider>
    )
}
