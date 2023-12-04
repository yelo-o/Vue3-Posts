<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<PostItem
					:title="post.title"
					:content="post.content"
					:created-at="post.createAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>
		<hr class="my-4" />
		<AppCard>
			<PostDetailView :id="2"></PostDetailView>
		</AppCard>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);
const fetchPosts = () => {
	posts.value = getPosts();
};
fetchPosts();
const goPage = id => {
	// url 직접 푸쉬하기
	// router.push(`/posts/${id}`);
	// 객체로 push 하기
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
		// http://localhost:5173/posts/2?searchtext=hello#world! query와 hash 사용
		// query: {
		// 	searchtext: 'hello',
		// },
		// hash: '#world!',
	});
};
</script>

<style lang="scss" scoped></style>
