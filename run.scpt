on run argv
    tell application "Finder"
        set current_path to (POSIX path of (container of (path to me) as alias))
    end tell

    tell application "Adobe Illustrator"
        do javascript "#include '" & current_path & item 1 of argv & "';" with arguments argv
    end tell
end run
