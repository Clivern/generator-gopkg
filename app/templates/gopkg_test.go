// Copyright <%- year %> <%- author %>. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

package <%- package_name %>

import (
	"testing"

	"github.com/franela/goblin"
)

// TestUnitSum test cases
func TestUnitSum(t *testing.T) {
	g := goblin.Goblin(t)

	g.Describe("#SumFunc", func() {
		g.It("It should satisfy all provided test cases", func() {
			var tests = []struct {
				input      []int
				wantResult int
			}{
				{[]int{1, 2, 3, 4, 5}, 15},
				{[]int{3, 4, 5}, 12},
				{[]int{36, 98, 63, 3628, 2863, 27392, 883929}, 918009},
				{[]int{36, 21, 63, 12, 56, 90, 32}, 310},
				{[]int{123, 283, 345, 544, 332, 4455, 1233}, 7315},
			}
			for _, tt := range tests {
				g.Assert(Sum(tt.input)).Equal(tt.wantResult)
			}
		})
	})
}

// BenchmarkUnitSum benchmark
func BenchmarkUnitSum(b *testing.B) {
	var input []int

	for n := 0; n < b.N; n++ {
		input = append(input, n)
	}

	b.Logf("Sum function input length %v \n", len(input))
	Sum(input)
}
