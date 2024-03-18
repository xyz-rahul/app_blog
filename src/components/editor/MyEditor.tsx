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

export default function PlateEditor({
    state,
    onChange,
}: {
    state: any
    onChange: any
}) {
    return (
        <DndProvider backend={HTML5Backend}>
            <CommentsProvider users={{}} myUserId="1">
                <Plate plugins={plugins} value={state} onChange={onChange}>
                    <FixedToolbar>
                        <FixedToolbarButtons />
                    </FixedToolbar>

                    <Editor focusRing={false} className="mt-8 p-8 h-max" />
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
