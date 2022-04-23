def depth_first_search(graph)
  discovered = Array.new(graph.keys.length, false)
	path = []
	analize(0, graph, discovered, path)
	path
end

def analize(current_node, graph, discovered, path)
	discovered[current_node] = true
	#We're procesing the current node at this point. So push the current
	path.push(current_node)
	# Recursively branch out each undiscovered adjacent node one by one
	graph[current_node].each do |adjacent_node|
		unless discovered[adjacent_node]
			analize(adjacent_node, graph, discovered, path)
		end
	end
end

p depth_first_search({
  0 => [2], 
  1 => [4], 
  2 => [5, 0, 3], 
  3 => [2], 
  4 => [1, 5], 
  5 => [4, 2]
})
# => [0, 2, 5, 4, 1, 3]
