def bfs(graph)
	discovered = Array.new(graph.keys.length, false)
	queue = []
	path = []
	# Start with the node 0
	queue.push(0)
	# Mark the node 0 dicovered
	discovered[0] = true

	until queue.empty?
		current = queue.shift
		# We're processing the current element at this point. So, push current node to the result path
		path.push(current)
		# explore the adjacent node of the current node
		graph[current].each do |adjacent|
			unless discovered[adjacent]
				queue.push(adjacent)
				discovered[adjacent] = true
			end
		end 
	end
	puts path
end

graph = {
  0 => [2], 
  1 => [4], 
  2 => [5, 0, 3], 
  3 => [2], 
  4 => [1, 5], 
  5 => [4, 2]
}

bfs(graph)
# => [0, 2, 5, 3, 4, 1]
