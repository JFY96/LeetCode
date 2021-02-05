/* Simplify Path

Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.

The canonical path should have the following format:

The path starts with a single slash '/'.
Any two directories are separated by a single slash '/'.
The path does not end with a trailing '/'.
The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
Return the simplified canonical path.


Example 1:

Input: path = "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.

Example 2:

Input: path = "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.

Example 3:

Input: path = "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.

Example 4:

Input: path = "/a/./b/../../c/"
Output: "/c"
 

Constraints:

1 <= path.length <= 3000
path consists of English letters, digits, period '.', slash '/' or '_'.
path is a valid absolute Unix path.

*/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let pathChunks = path.split('/'); // split the path by the slashes
    let i = 0, length = pathChunks.length;
    while (i <length) {
        // console.log(`${i} of ${length}: ${pathChunks[i]}`);
        switch (pathChunks[i]) {
            case '..':
                if (i-1 >= 0) { // remove the element before '..', as well as '..' if it exists
                    pathChunks.splice(i-1, 2);
                    length -= 2;
                    i--;
                    break;
                }
            case '':
            case '.':
                pathChunks.splice(i, 1); // remove any '' or '.', aswell as any '..' if there is nothing before it
                length--;
                break;
            default:
                i++;
                break;
        }
    }
    return '/' + pathChunks.join('/');
};

const test = (path) => {
    console.log('Input:', path);
    console.log('Output:', simplifyPath(path));
}

test("/home/");
test("/../");
test("/home//foo/");
test("/a/./b/../../c/");
test("/a/.////b/../../c/");