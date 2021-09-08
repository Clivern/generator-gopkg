// Copyright <%- year %> <%- author %>. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

package <%- package_name %>

// Sum sum array values
func Sum(ar []int) int {
	result := 0

	for _, v := range ar {
		result += v
	}

	return result
}
